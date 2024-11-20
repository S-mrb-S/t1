import { dropBooks } from './drop.js';
import { findAllBooks, findBookByTitle } from './find.js';
import { saveBook } from './save.js';

import { MysqlModuleNames } from '#ts/enums';
import { DatabasesType } from '#ts/types';

export const mysqlModules: DatabasesType = {
  name: 'mysql',
  modules: [
    {
      name: MysqlModuleNames.drop,
      func: dropBooks,
    },
    {
      name: MysqlModuleNames.find,
      func: findBookByTitle,
    },
    {
      name: MysqlModuleNames.save,
      func: saveBook,
    },
    {
      name: MysqlModuleNames.getall,
      func: findAllBooks,
    }
  ],
};
