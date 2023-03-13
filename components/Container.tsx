import clsx from "clsx";

/**
 * Props for the Container component.
 *
 * @property {string} className - The class name to apply to the container. This is optional.
 *
 * All other props are passed to the content of the Container component.
 */
interface ContainerProps {
  className?: string;
  [key: string]: any;
}

/**
 * The container for the content of the page.
 */
function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-8 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

// Make the className prop optional.
Container.defaultProps = {
  className: "",
};

export default Container;
