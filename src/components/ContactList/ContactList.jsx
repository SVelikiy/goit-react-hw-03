import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function Contactlist({ contacts, onDelete }) {
  return (
    <div className={css.listContainer}>
      <ul className={css.list}>
        {contacts.map((contact) => {
          return (
            <li key={contact.id} className={css.item}>
              <Contact contact={contact} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
