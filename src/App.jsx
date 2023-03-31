import './styles.css'

import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {

  let thumbnailSize = 's'
  if (size > 90){
    thumbnailSize  = 'b'
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={400}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}