import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Label,
  Badge,
} from './ui';

const SkillCard = ({ skill, onDragStart }) => (
  <div
    draggable
    onDragStart={e => onDragStart(e, skill)}
    className='cursor-move border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow'
  >
    <div className='text-4xl mb-2'>{skill.icon}</div>
    <h3 className='text-lg font-semibold'>{skill.name}</h3>
    <p className='text-sm text-gray-600 mb-2'>{skill.description}</p>
    <div className='flex flex-wrap gap-2'>
      {Object.entries(skill.requirements).map(([req, needed]) =>
        needed ? (
          <Badge key={req} variant='secondary'>
            {req}
          </Badge>
        ) : null
      )}
    </div>
  </div>
);

export default SkillCard;
