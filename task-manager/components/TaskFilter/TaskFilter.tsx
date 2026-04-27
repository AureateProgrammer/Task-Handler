import react from 'react';
import {taskFilterProps} from '../types';

export const TaskFilter: React.FC<taskFilterProps> = ({onFilterChange}) => {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({status: e.target.value as any});
  };}
