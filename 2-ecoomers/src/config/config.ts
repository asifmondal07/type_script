const config={
    appwrite: {
        url: import.meta.env.VITE_APPWRITE_URL, 
        projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
        databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID ,
        registerCollectionId: import.meta.env.VITE_APPWRITE_REGISTER_COLLECTION_ID ,
        productsCollectionId: import.meta.env.VITE_APPWRITE_PRODUCTS_COLLECTION_ID ,
        bucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID 
    }
}


export default config;