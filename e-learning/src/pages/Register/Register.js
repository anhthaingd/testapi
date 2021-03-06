import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
import { useState } from "react";
import { Footer } from "./../../templates/HomeTemplate/Footer/Footer";
// import { number } from "yup";
// import { useState } from "react",
const { Option } = Select;

const btnRegister = {
  backgroundColor: "#0095ff",
  border: "1px solid transparent",
  borderRadius: "3px",
  boxShadow: "rgba(255, 255, 255, .4) 0 1px 0 0 inset",
  color: "#fff",
  display: "inline-block",
  touchAction: "manipulation",
  marginLeft: 220,
  padding: 3,
};
const Register = (props) => {
  const { history, location } = props;

  return (
    <>
      <div className="container mt-20">
        <h1 className="text-center text-5xl">Thông tin đăng ký</h1>

        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          onFinish={
            () => history.push(location.state ? location.state.from : "/")
            // history.goBack()
          }
        >
          <div style={{ border: "1px solid" }} className="p-10">
            <Form.Item label="Fullname" required>
              <Form.Item
                name="firstname"
                rules={[
                  {
                    required: true,
                    message: "Please input your firstname!",
                    whitespace: true,
                  },
                  {
                    max: 50,
                    message: "Must be between 6 to 50 characters!",
                  },
                ]}
                style={{ display: "inline-block", width: "calc(50% - 8px)" }}
              >
                <Input placeholder="Input first name" />
              </Form.Item>
              <Form.Item
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "Please input your lastname!",
                    whitespace: true,
                  },
                  {
                    max: 50,
                    message: "Must be between 6 to 50 characters!",
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  margin: "0 0 0 16px",
                }}
              >
                <Input placeholder="Input last name" />
              </Form.Item>
            </Form.Item>
            <Form.Item
              name="username"
              label="Username"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                  whitespace: true,
                },
                {
                  min: 6,
                  message: "Must be between 6 to 50 characters!",
                },
                {
                  max: 50,
                  message: "Must be between 6 to 50 characters!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  min: 8,
                  message: "Must be between 8 to 50 characters!",
                },
                {
                  max: 50,
                  message: "Must be between 8 to 50 characters!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                {
                  min: 8,
                  message: "Must be between 8 to 50 characters!",
                },
                {
                  max: 50,
                  message: "Must be between 8 to 50 characters!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="numberPhone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: "Please select gender!",
                },
              ]}
            >
              <Select placeholder="Select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            {/* <Form.Item>
            <Input.TextArea
              showCount
              value=" Dân Trí là một tờ báo điện tử trực thuộc Bộ Lao đông - Thương binh và
          Xã hội. Theo thống kê của Google, đến nay, mỗi tháng có bình quân Dân
          trí có 900 triệu pageviews; mỗi ngày có bình quân trên 10 triệu lượt
          người truy cập vào báo Dân trí tiếng Việt và tiếng Anh, trong đó 20%
          người truy cập từ nước ngoài."
              disabled
            />
          </Form.Item> */}

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
              style={{ marginLeft: 230 }}
            >
              <Checkbox>
                I have read the <a href="abc">agreement</a>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <button type="submit" style={btnRegister}>
                Register
              </button>
            </Form.Item>
          </div>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
