import mongoose from 'mongoose';

import { mongo_ns } from '#ts/interfaces.js';

export class ItemFind {
  private readonly itemModel: mongoose.Model<mongo_ns.IItem>;

  public constructor(itemModel: mongoose.Model<mongo_ns.IItem>) {
    this.itemModel = itemModel;
  }

  public async getItemByTitle(title: string): Promise<any> {
    try {
      const item = await this.itemModel.findById(title);
      if (item) {
        return item;
      } else {
        return `No item found with the title "${title}".`;
      }
    } catch (error) {
      assert(
        `Error fetching item: ${error instanceof Error ? error.message : error}`,
        true
      );
    }
  }

  public async getAllItems(limit: number = 10, page: number = 1): Promise<any> {
    try {
      const query = this.itemModel.find();

      if (limit > 0) {
        query.limit(limit);
      }

      if (page > 0) {
        query.skip((page - 1) * limit);
      }

      const items = await query.lean();

      return items;
    } catch (error) {
      assert(
        `Error fetching items: ${error instanceof Error ? error.message : error}`
      );
    }
  }
}
