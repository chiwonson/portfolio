import React from 'react';

import ActivityItem from './ActivityItem';
import SectionTitle from '@/components/SectionTitle';

import { DataProps } from '@/types';

type ActivityProps = {
  activity: DataProps['activity']; // DataProps에서 activity의 타입 가져오기
};

const Activity: React.FC<ActivityProps> = ({ activity }) => {
  return (
    <div>
      <SectionTitle>Activities</SectionTitle>
      <div className="flex flex-col gap-24">
        {[...activity].reverse().map((item) => (
          <ActivityItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Activity;
