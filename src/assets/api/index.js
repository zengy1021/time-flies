import request from "@/utils/request";

export default {
  test: request.get("path", {
    headers: {
      contentType: "application/json"
    }
  }),
  test2: request.post("path", {
    headers: {
      contentType: "application/json"
    }
  }),
  test3: function(path, params, data) {
    return request.post(path, {
      headers: {
        contentType: "multipart/form-data",
        ...params
      }
    })(data);
  }
};
