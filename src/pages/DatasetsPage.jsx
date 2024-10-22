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
} from '../components/ui';
import { DatabaseIcon } from '../components/icons';
import { datasetsData, skillsData } from '../components/mock_data';

const DatasetsPage = () => (
  <div>
    <h1 className='text-2xl font-bold mb-4'>Datasets Library</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {datasetsData.map(dataset => (
        <Card key={dataset.id}>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <DatabaseIcon />
              {dataset.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              <p>
                <strong>Samples:</strong> {dataset.samples}
              </p>
              <p>
                <strong>Date Created:</strong> {dataset.dateCreated}
              </p>
              <p>
                <strong>Size:</strong> {dataset.size}
              </p>
              <p>
                <strong>Associated Skill:</strong>{' '}
                {skillsData.find(s => s.id === dataset.skillId)?.name}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default DatasetsPage;
