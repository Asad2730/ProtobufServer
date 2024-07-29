
import  grpc from '@grpc/grpc-js';

import {
     CrudService, CreateRequest, ReadRequest, UpdateRequest, DeleteRequest, CreateResponse, DeleteResponse,
    ReadResponse, UpdateResponse
} from './generate-proto/crud_pb'



const server: grpc.Server = new grpc.Server()

const dataStore: { id: string, data: string }[] = [];


class Crud implements CrudService {
    Create(request: CreateRequest): Promise<CreateResponse> {
        dataStore.push(request)
        const response: CreateResponse = { success: true }
        return Promise.resolve(response)
    }

    Read(request: ReadRequest): Promise<ReadResponse> {
        const data = dataStore.find(i => i.id === request.id)
        if (!data) return Promise.reject(`Data not found with id ${request.id}`)
        const response: ReadResponse = { data: data.data }
        return Promise.resolve(response)
    }
    Update(request: UpdateRequest): Promise<UpdateResponse> {
        const data = dataStore.find(i => i.id === request.id)
        if (!data) return Promise.reject(`Data not found with id ${request.id}`)
        Object.assign(data,request)    
        const response:UpdateResponse = {success:true}
        return Promise.resolve(response)
        
    }

    Delete(request: DeleteRequest): Promise<DeleteResponse> {
        const idx = dataStore.findIndex(i=>i.id === request.id)
        if(idx === -1)  return Promise.reject(`Data not found with id ${request.id}`)
        dataStore.splice(idx,1)
        const response:DeleteResponse = {success:true}    
        return Promise.resolve(response)
    }
}




server.addService(Crud,CrudService)

const PORT = 5051
server.bindAsync(`0.0.0.0:${PORT}`,grpc.ServerCredentials.createInsecure(),()=>{
    console.log(`Server running at http://0.0.0.0:${PORT}`);
})
