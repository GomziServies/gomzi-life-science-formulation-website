/**
 * Reveal Component
 * Renders the element directly with zero scroll-animation overhead.
 * Maintains DOM structure, semantic tag, classNames, and props.
 */
export default function Reveal({
  className = '',
  children,
  as: Tag = 'div',
  ...rest
}) {
  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
}
