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
const user = {name: 'Tricia Speller'}
export default function Profile() {
  return (
    <>
      <h3>{user.name}</h3>
    <Avatar
      size={200}
      person={{ 
        name: 'Tricia Lovette Mulili', 
        profession: 'Therapist',
        imageId: '7vQD0fP'
      }}
    />
    </>
  );
}


/*In this example, Avatar receives a numeric size prop which determines the <img> width and height. The size prop is set to 40 in this example. However, if you open the image in a new tab, you’ll notice that the image itself is larger (160 pixels). The real image size is determined by which thumbnail size you’re requesting.

Change the Avatar component to request the closest image size based on the size prop. Specifically, if the size is less than 90, pass 's' (“small”) rather than 'b' (“big”) to the getImageUrl function. Verify that your changes work by rendering avatars with different values  */ 