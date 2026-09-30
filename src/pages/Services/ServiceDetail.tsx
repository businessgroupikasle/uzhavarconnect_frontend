import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SERVICES_DATA } from '../../data/services';
import { ServiceDetailLayout } from './components/ServiceDetailLayout';
import { usePageSeo } from '../../utils/seo';
import { ServiceItem } from '../../types';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service: ServiceItem | undefined = SERVICES_DATA.find((s: ServiceItem) => s.slug === slug);

  usePageSeo({
    title: service ? `${service.title} | Uzhavar Connect` : 'Service Not Found',
    description: service?.shortDescription || 'Agricultural service details from Uzhavar Connect.',
    canonicalUrl: service ? `https://uzhavarconnect.com/services/${service.slug}` : 'https://uzhavarconnect.com/services',
    ogImage: service?.heroImage ? `https://uzhavarconnect.com${service.heroImage}` : undefined,
  });

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <ServiceDetailLayout
      service={service}
      otherServices={SERVICES_DATA}
    />
  );
};

export const ServiceDetailPage = ServiceDetail;
export default ServiceDetail;
