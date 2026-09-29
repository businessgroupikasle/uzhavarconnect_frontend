import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePageSeo } from '../../utils/seo';
import { SERVICES_DATA } from '../../data/services';
import { ServiceDetailLayout } from '../Services/components/ServiceDetailLayout';
import { ServiceItem } from '../../types';

export const BookService: React.FC = () => {
  const [searchParams] = useSearchParams();
  const serviceSlug = searchParams.get('service') || '';

  const matchedService: ServiceItem = 
    SERVICES_DATA.find((s: ServiceItem) => s.slug === serviceSlug) || SERVICES_DATA[0];

  usePageSeo({
    title: `Request ${matchedService.title} | Uzhavar Connect`,
    description: `Submit an enquiry for ${matchedService.title} with Uzhavar Connect. We provide complete agricultural land development and farm management.`,
  });

  return (
    <ServiceDetailLayout
      service={matchedService}
      otherServices={SERVICES_DATA}
    />
  );
};

export const BookServicePage = BookService;
export default BookService;
