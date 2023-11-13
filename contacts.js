import fs from "fs/promises"
import path from "path"
import { nanoid } from "nanoid"
    export const listContacts = async () => {
        const contacts = await fs.readFile(contactsPath, "utf-8")
       console.log(JSON.parse(contacts));
    }
    export const getContactById = async (contactId) => {
        const contacts = JSON.parse(await fs.readFile(contactsPath, "utf-8"))
       const contactsIdx = contacts.findIndex(contact => contact.id === contactId)
       if (contactsIdx === -1) {
        return console.error("failed to find contact with this id")
       }
       console.log(contacts[contactsIdx]);
      }
      export const removeContact = async (contactId) => {
        // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
        const contacts = JSON.parse(await fs.readFile(contactsPath, "utf-8"))
        const contactsIdx = contacts.findIndex(contact => contact.id === contactId)
        if (contactsIdx === -1) {
            return console.error("failed to find contact with this id")
           }
           const deletedContact = contacts.splice(contactsIdx, 1)
           console.log(deletedContact);
           fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
      }
      export const addContact = async (name, email, phone) => {
        // ...твій код. Повертає об'єкт доданого контакту. 
        const contacts = JSON.parse(await fs.readFile(contactsPath, "utf-8"))
        const contactWithSameName = contacts.find(contact => contact.name.toUpperCase() === name.toUpperCase())
        if (contactWithSameName !== undefined) {
            return console.error(`contact with ${name} is already in the contacts list`)
        }
           const newContact = {
            id: nanoid(),
            name,
            email,
            phone
           }
           console.log(newContact);
           contacts.push(newContact)
           fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
      }
const contactsPath = path.resolve("db", "contacts.json")
export const tryCatch = async (callback) => {
    try {
       return await callback()
    } catch (error) {
        console.error(error.message)
    }
}
