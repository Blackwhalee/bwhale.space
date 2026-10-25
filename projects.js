const projects = [
  // { name: "项目名", href: "https://app.bwhale.space", note: "一句话" },
];

const list = document.querySelector("#projects");
const empty = document.querySelector("#empty");

if (projects.length === 0) {
  empty.hidden = false;
} else {
  for (const project of projects) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = project.href;
    link.textContent = project.name;
    item.append(link);
    if (project.note) {
      const note = document.createElement("span");
      note.textContent = project.note;
      item.append(note);
    }
    list.append(item);
  }
}
