export function getImageUrl(person, size) {
  return (
    'https://i.postimg.cc/wjBnkKZ1/IMG-9154.jpg' +
    person.imageId +
    size +
    '.jpg'
  );
}