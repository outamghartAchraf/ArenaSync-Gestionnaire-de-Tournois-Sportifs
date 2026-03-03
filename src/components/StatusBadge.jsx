export default function StatusBadge({ status, statusClass }) {
  const getStatusStyles = (statusClass) => {
    const styles = {
      'on-going': 'bg-green-100 text-green-600',
      'upcoming': 'bg-orange-100 text-orange-600',
      'confirmed': 'bg-green-100 text-green-600',
      'pending': 'bg-orange-100 text-orange-600'
    };
    return styles[statusClass] || 'bg-blue-100 text-blue-600';
  };

 

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold ${getStatusStyles(statusClass)}`}>
    
      {status}
    </span>
  );
}