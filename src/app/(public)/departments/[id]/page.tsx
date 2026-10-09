import DepartmentClient from './DepartmentClient';

export function generateStaticParams() {
  return [
    { id: 'cardiology' },
    { id: 'neurology' },
    { id: 'orthopedics' },
    { id: 'pediatrics' },
    { id: 'dental-care' },
    { id: 'eye-care' }
  ];
}

export default async function DepartmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <DepartmentClient id={id} />;
}
