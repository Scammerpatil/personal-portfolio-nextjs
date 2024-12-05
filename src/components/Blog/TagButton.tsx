const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <a
      href={href}
      className="bg-gray-light mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-base-300 duration-300 hover:text-base-content bg-primary hover:bg-secondary w-fit"
    >
      {text}
    </a>
  );
};

export default TagButton;
