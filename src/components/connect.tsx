import { connect } from '@/content';
import { Reveal } from './reveal';
import { SocialPills } from './social-pills';

export function Connect() {
  return (
    <div className='rule p-4'>
      <Reveal delay={0.08}>
        <p className='text-fg font-serif text-[34px] leading-[1.05] tracking-[-0.01em] italic'>
          {connect.headline}
        </p>
        <p className='text-muted mt-2'>{connect.copy}</p>
        <div className='mt-5'>
          <SocialPills />
        </div>
      </Reveal>
    </div>
  );
}
