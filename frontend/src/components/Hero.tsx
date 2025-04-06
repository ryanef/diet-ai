import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

import GetStarted from './GetStarted';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Health-first recommendations',
    description:
      'Snap a pic or type your list — get recipes tailored to your health needs that make the most of what you have.',
  },
  {
    icon: <ConstructionRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Innovative Functionality',
    description:
      'Cutting-edge tech that stays ahead of trends and health goals.',
  },
  {
    icon: <ThumbUpAltRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Effortless Everyday Use',
    description:
      'Our AI learns what works for you—and gets better with every recipe.',
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Personalized Like Never Before',
    description:
      'Our AI doesn’t just suggest meals—it adapts to you, your ingredients, and your health needs.',
  },
];

export default function Hero() {
  return (
    <div className='hero'>
      <div className='hero-title'>
  
      </div>


      <div className="hero-get-started">
        <GetStarted/>
      </div>
  </div>
  );
}