import { NotFoundException } from '@nestjs/common';
import {
    FilterQuery,
    LeanDocument,
    Model,
  } from 'mongoose';
export abstract class EntityRepository<TEntity> {
    constructor(private readonly entityModel: Model<TEntity>) {

    }

    protected async findOne(
        entityFilterQuery: FilterQuery<TEntity>,
    ) : Promise<TEntity> {
        const entityDocument = await this.entityModel.findOne(
            entityFilterQuery,
            {},
            {lean:true},
        );

        if (!entityDocument) {
            throw new NotFoundException('Entity was not found.');
        }

        return entityDocument;
    }

    async find(
        entityFilterQuery?: FilterQuery<TEntity>,
      ): Promise<TEntity[]> {
        return (
          await this.entityModel.find(entityFilterQuery, {}, { lean: true })
        );
      }
    
}