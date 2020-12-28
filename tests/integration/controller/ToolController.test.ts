import { ToolInputDTO } from "../../../src/model/Tool"
import request from 'supertest';
import { server } from "../../../src"
import { ToolController } from "../../../src/controller/ToolController";

describe('ToolController (unit)', () => {

    describe('addTool()', () => {
        afterEach(async () => {
            server.close();
        });

        it('should call add a new tool', async () => {

            const toolInput: ToolInputDTO = {
                title: "test tool",
                link: "www.link.com",
                description: "tool",
                tags: ["cool", "useful"]
            };

            const { body } = await request(server)
                .post(`/tools`)
                .expect(201)
                .send(toolInput)
            expect(body).toStrictEqual({ message: "Ferramenta adicionada com sucesso." })
        })
    })
})