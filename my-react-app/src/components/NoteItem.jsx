function NoteItem({ note, onDelete }) {
  return (
    <div className="note-item">
      
      <div className="note-top">
        <span className="note-content">{note.content}</span>

        <button
          className="delete-btn"
          onClick={() => onDelete(note.id)}
        >
          Delete
        </button>
      </div>

      <span className="note-time">
        Created at: {note.createdAt}
      </span>

    </div>
  );
}

export default NoteItem;
