"""update created

Revision ID: 501e798bdda9
Revises: b6c709c9101b
Create Date: 2025-11-04 04:52:26.734361

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '501e798bdda9'
down_revision: Union[str, Sequence[str], None] = 'b6c709c9101b'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.alter_column(
        'volunteer_applications',
        'created_at',
        existing_type=sa.VARCHAR(),
        type_=sa.DateTime(timezone=True),
        postgresql_using="created_at::timestamp with time zone",
        existing_nullable=False,
        existing_server_default=sa.text('now()')
    )


def downgrade() -> None:
    """Downgrade schema."""
    op.alter_column(
        'volunteer_applications',
        'created_at',
        existing_type=sa.DateTime(timezone=True),
        type_=sa.VARCHAR(),
        postgresql_using="created_at::text",
        existing_nullable=False,
        existing_server_default=sa.text('now()')
    )
