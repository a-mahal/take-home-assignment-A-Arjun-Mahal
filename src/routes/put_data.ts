import { FastifyInstance } from 'fastify';

import prisma from '../db/db_client';
import { serializer } from './middleware/pre_serializer';
import { ApiError } from '../errors';


async function putDataRoutes(app: FastifyInstance) {
  app.setReplySerializer(serializer);

  const log = app.log.child({ component: 'putDataRoutes' });

  app.put<{
    Body: {
      id: string; // ID of the formData to update
      question?: string,
      answer?: string,
      description?: string; // Optional new description
      createdAt?: string,
      updatedAt?: string,
      title?: string,
      status?: string,
    };
    Reply: {
      success: boolean;
      updatedFormData?: object; // Updated formData object
    };
  }>('', {
    async handler(req, reply) {
      log.debug('update form data');
      const { id, question, answer, description, createdAt, updatedAt, title, status } = req.body;

      try {
        // Ensure `id` is provided
        if (!id) {
          throw new ApiError('ID is required to update formData', 400);
        }

        // Update the formData entry in the database
        const updatedFormData = await prisma.formData.update({
          where: { id },
          data: {
            ...(question && { question }), // Update description if provided
            ...(answer && { answer }), // Update description if provided
            ...(description && { description }), // Update description if provided
            ...(createdAt && { createdAt }), // Update description if provided
            ...(updatedAt && { updatedAt }), // Update description if provided
            ...(title && { title }), // Update description if provided
            ...(status && { status }), // Update description if provided
          },
        });

        reply.send({
          success: true,
          updatedFormData,
        });
      } catch (err: any) {
        log.error({ err }, err.message);
        throw new ApiError('failed to update form data', 400);
      }
    },
  });
}

export default putDataRoutes;
