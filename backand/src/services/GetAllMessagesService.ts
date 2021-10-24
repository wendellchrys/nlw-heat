import prismaClient from "../prisma";

class GetAllMessagesService {
  async execute() {
    const messages = await prismaClient.message.findMany({
      orderBy: {
        created_at: "desc"
      },
      include: {
        user: true,
      }
    })

    return messages
  }
}

export { GetAllMessagesService };
