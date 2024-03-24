type NoteFormProps = {
  onCreate: ({ title, content }: { title: string; content: string }) => void;
};

const NoteForm = ({ onCreate }: NoteFormProps) => {
  return (
    <div>
      NoteForm
      <button
        onClick={() => onCreate({ title: "test", content: "test content" })}
      >
        Create
      </button>
    </div>
  );
};

export default NoteForm;
