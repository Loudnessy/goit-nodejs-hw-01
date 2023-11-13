import * as contacts from "./contacts.js";
import { Command } from "commander"
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');
  program.parse(process.argv);
  const argv = program.opts();
  function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case 'list':
contacts.tryCatch(contacts.listContacts)
        // ...
        break;
  
      case 'get':
        // ... id
        contacts.tryCatch(() => contacts.getContactById(id))
        break;
  
      case 'add':
        contacts.tryCatch(() => contacts.addContact(name,email,phone))
        // ... name email phone
        break;
  
      case 'remove':
        contacts.tryCatch(() => contacts.removeContact(id))
        // ... id
        break;
  
      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  }
  
  invokeAction(argv);
// 

