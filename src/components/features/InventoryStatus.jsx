import Badge from '../common/Badge';
import { getInventoryStatus } from '../../utils/inventoryHelpers';

export default function InventoryStatus({ stock }) {
  const status = getInventoryStatus(stock);

  return (
    <div className="inventory-status">
      <Badge variant={status.variant}>
        {status.label}
      </Badge>
      <span className="stock-count">{stock} unidades disponibles</span>
    </div>
  );
}
