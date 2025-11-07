"""change id from UUID to Integer (auto increment)

Revision ID: d34af0c583f5
Revises: d63b48e03889
Create Date: 2025-11-07 17:47:48.477128
"""
from typing import Sequence, Union
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'd34af0c583f5'
down_revision: Union[str, Sequence[str], None] = 'd63b48e03889'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # --- STEP 1: add a new auto-incrementing integer column ---
    op.add_column(
        "training_applications",
        sa.Column("new_id", sa.Integer(), autoincrement=True)
    )

    # --- STEP 2: create a sequence and populate new_id ---
    op.execute("""
        CREATE SEQUENCE training_applications_new_id_seq START 1;
        UPDATE training_applications
        SET new_id = nextval('training_applications_new_id_seq');
    """)

    # --- STEP 3: drop foreign key constraints referencing old id (if any) ---
    # Example (uncomment & adjust if exists):
    # op.drop_constraint("training_payments_application_id_fkey", "training_payments", type_="foreignkey")

    # --- STEP 4: drop primary key and old id column ---
    op.drop_constraint("training_applications_pkey", "training_applications", type_="primary")
    op.drop_column("training_applications", "id")

    # --- STEP 5: rename new_id → id ---
    op.alter_column("training_applications", "new_id", new_column_name="id")

    # --- STEP 6: recreate primary key ---
    op.create_primary_key("training_applications_pkey", "training_applications", ["id"])

    # --- STEP 7: re-add foreign key if needed ---
    # Example (if your training_payments table references this id):
    # op.create_foreign_key(
    #     "training_payments_application_id_fkey",
    #     "training_payments", "training_applications",
    #     ["application_id"], ["id"]
    # )


def downgrade() -> None:
    """Reverse the id change (integer → UUID)."""
    # This is generally irreversible unless you saved UUIDs elsewhere.
    # You can leave it empty or log a warning.
    pass
