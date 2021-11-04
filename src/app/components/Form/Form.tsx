import React, { useState } from 'react';
import styles from './Form.module.css';

function Form({ onSubmit }): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({ title, description });
  }

  return (
    <form className={styles.form} onSubmit={(event) => handleSubmit(event)}>
      <label>
        Title:{''}
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        Description:{''}
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
        />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}
// <>
//     <form>
//             <label> htmlFor="">
//                 Title</label>
//             <input type="text" />
//             <label htmlFor="">Description</label>
//             <input type="text"/>
//             <button>Submit</button>
//     </form>
// </>
// )

export default Form;
