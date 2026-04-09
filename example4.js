async function f() {
    let response = await fatch('http://uyzurl');

}
// f () become a rejected promise

f().catch(alert);