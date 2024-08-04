// 生成一段代码，数据校验字符串是所有接收字段的链，按字母顺序排序，格式key=<value>为以换行符（'\n'，0x0A）作为分隔符 - 例如'auth_date=<auth_date>\nquery_id=<query_id>\nuser=<user>'。

import { validate } from "@telegram-apps/init-data-node";

const secretToken = "7457965617:AAHfKc991e_5xKzgEghTv8z_SY717VlqRKY";
// const initData =
//   'query_id=AAHdF6IQAAAAAN0XohDhrOrc' +
//   '&user=%7B%22id%22%3A279058397%2C%22first_name%22%3A%22Vladislav%22%2C%22last_name%22%3A%22Kibenko%22%2C%22username%22%3A%22vdkfrost%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%7D' +
//   '&auth_date=1662771648' +
//   '&hash=c501b71e775f74ce10e377dea85a7ea24ecd640b223ea86dfe453e0eaed2e2b2';

export function validateRaw(initData: string, secret = secretToken) {
  try {
    validate(initData, secret);
    return "success";
  } catch (e: any) {
    return e.message;
  }
}
