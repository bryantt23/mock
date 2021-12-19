import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
};

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [firstName, setFirstName] = useState('Coder');
  const [lastName, setLastName] = useState('Byte');
  const [phone, setPhone] = useState('8885559999');

  function handleSubmit() {
    console.log(firstName, lastName, phone);
    addEntryToPhoneBook({ firstName, lastName, phone });
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
      style={style.form.container}
    >
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        type='text'
        value={firstName}
        onChange={e => {
          setFirstName(e.target.value);
        }}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userLastname'
        name='userLastname'
        type='text'
        value={lastName}
        onChange={e => {
          setLastName(e.target.value);
        }}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone'
        name='userPhone'
        type='text'
        value={phone}
        onChange={e => {
          setPhone(e.target.value);
        }}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
      />
    </form>
  );
}

function InformationTable(props) {
  let { entries } = props;

  console.log(entries);
  return (
    <table style={style.table} className='informationTable'>
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
        {entries.map(entry => {
          return (
            <tr>
              <td>{entry.firstName}</td>
              <td>{entry.lastName}</td>
              <td>{entry.phone}</td>
            </tr>
          );
        })}
      </thead>
    </table>
  );
}

function App() {
  let arr = [
    { firstName: 'John', lastName: 'Doe', phone: 8885558888 },
    { firstName: 'Jane', lastName: 'Smith', phone: 8885557777 }
  ];

  const [entries, setEntries] = useState(arr);

  function addEntryToPhoneBook(entry) {
    let curEntries = entries.concat(entry);
    console.log(curEntries);
    curEntries.sort((a, b) =>
      a.lastName === b.lastName ? 0 : a.lastName < b.lastName ? -1 : 1
    );
    setEntries(curEntries);
  }

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable entries={entries} />
    </section>
  );
}

export default App;
