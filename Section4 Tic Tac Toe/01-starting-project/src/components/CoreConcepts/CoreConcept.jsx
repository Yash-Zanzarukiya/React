export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{description}</p>
    </li>
  );
}