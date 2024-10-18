import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';


export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platoform: 'com.jsm.aora',
    projectId: '671225d4001bc514000d',
    databaseId: '67122ad900165d8c8854',
    userCollectionId: '67122b0b000e380c9797',
    videoCollectionId: '67122b3d003a9cf405f7',
    storageId: '67123072001d292173de',
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platoform);
    

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client); 

export const createUser = async (email, password, username) => {
    try{
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error;
        
        const avatarUrl = avatars.getInitials(username)

        await SignIn(email, password);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )

        return newUser;
    } catch (error){
        console.log(error);
        throw new Error(error);
    }
}

export async function SignIn(email, password) {
    try {
        const session = await account.createSession(email, password)

        return session;
    } catch (error) {
        throw new Error(error);
    }
}



