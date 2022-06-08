import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVimeoV } from '@fortawesome/free-brands-svg-icons';

export function VimeoIcon({ className }: { className: string }) {
    return <FontAwesomeIcon icon={faVimeoV} className={className} />;
}
