export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes.", error);
    res.status(500).json({ message: "Error fetching notes." });
  }
}

export function createNote(req, res) {
  res.status(201).json({ message: "Post created successfully." });
}

export function updateNote(req, res){
  res.status(200).json({ message: "Post updated successfully." });
}

export function deleteNote(req, res){
  res.status(200).json({ message: "Post deleted successfully." });
}