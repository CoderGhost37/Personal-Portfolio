import { education } from '@/content';
import { RowContent } from './timeline-row';

export function EducationList() {
  return (
    <ul>
      {education.map((school) => (
        <li
          key={school.name}
          className='border-line flex items-start gap-3 border-t py-3.5 first:border-t-0'
        >
          <RowContent
            row={{
              name: school.name,
              subtitle: school.degree,
              dates: `${school.start} → ${school.end}`,
              aside: school.detail,
            }}
          />
        </li>
      ))}
    </ul>
  );
}
