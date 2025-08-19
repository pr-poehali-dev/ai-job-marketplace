import { Button } from './button';
import Icon from './icon';
import { useLanguage } from '@/hooks/useLanguage';

export const LanguageSwitcher = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();
  
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
    >
      <Icon name="Globe" className="w-4 h-4" />
      <span className="font-medium">
        {currentLanguage === 'ru' ? 'RU' : 'TG'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;