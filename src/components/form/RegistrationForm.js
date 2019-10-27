import React from "react"
import { Form, Input, Select, Button, AutoComplete, message } from "antd"
import { countryCode } from "../../data/countries.data"
import { messageService } from "./register"
import { AppConsumer } from "../../context"
const countries = countryCode.map(x => x.name)
const prefixes = [...new Set(countryCode.map(x => x.code).sort())]

const { Option } = Select

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  }
  handleSubmit = e => {
    e.preventDefault()
    const { resetFields } = this.props.form
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        const hide = message.loading("Please wait..", 0)
        const {
          firstName,
          lastName,
          email,
          company,
          jobTitle,
          address,
          noOfTeam,
          prefix,
          workNumber,
          country,
        } = values
        try {
          const result = await messageService.create({
            firstname: firstName,
            lastname: lastName,
            email,
            company,
            job_title: jobTitle,
            state: address,
            country,
            noofteam: noOfTeam,
            phone: `${prefix}${workNumber}`,
          })
          if (result.success) {
            hide()
            message.success("Regestration Successful", 5)
            resetFields()
          } else {
            hide()
            message.error(result.msg, 5)
          }
        } catch (e) {
          hide()
          message.error("Oops. Something went wrong", 5)
        }
      }
    })
  }

  handleWebsiteChange = value => {
    let autoCompleteResult
    if (!value) {
      autoCompleteResult = []
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      )
    }
    this.setState({ autoCompleteResult })
  }

  setPrefixCode = data => {
    const { setFieldsValue } = this.props.form
    setFieldsValue({
      prefix: countryCode.find(obj => obj.name === data).code,
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    }
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "+1",
    })(
      <Select style={{ width: 70 }} dropdownMatchSelectWidth={false}>
        {prefixes.map((prefix, key) => (
          <Option key={prefix + key}>{prefix}</Option>
        ))}
      </Select>
    )

    return (
      <AppConsumer>
        {props => (
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="First Name">
              {getFieldDecorator("firstName", {
                rules: [
                  {
                    required: true,
                    message: "Please input your First Name!",
                    whitespace: true,
                  },
                  {
                    max: 255,
                    message: "That is too long for a First name",
                  },
                  {
                    type: "string",
                    pattern: /^[a-zA-Z\s]*$/,
                    message: "First name must only contain letters",
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Last Name">
              {getFieldDecorator("lastName", {
                rules: [
                  {
                    required: true,
                    message: "Please input your Last Name!",
                    whitespace: true,
                  },
                  {
                    max: 255,
                    message: "That is too long for a last name",
                  },
                  {
                    type: "string",
                    pattern: /^[a-zA-Z\s]*$/,
                    message: "Last name must only contain letters",
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="E-mail">
              {getFieldDecorator("email", {
                initialValue: props.appEmail,
                rules: [
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Company">
              {getFieldDecorator("company", {
                rules: [
                  {
                    required: true,
                    message: "Please input your company name!",
                    whitespace: true,
                  },
                  {
                    max: 500,
                    message: "That is too long for a company name",
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Number of employees">
              {getFieldDecorator("noOfTeam", {
                rules: [
                  {
                    pattern: /^\d+$/,
                    message: "Please enter numbers only",
                  },
                  {
                    required: true,
                    message: "Please input the number of your members.",
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="What is your job title?">
              {getFieldDecorator("jobTitle", {
                rules: [
                  {
                    required: true,
                    message: "Please input your job title!",
                    whitespace: true,
                  },
                  {
                    max: 250,
                    message: "That is too long for a job title",
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item
              label="State/Province"
              extra="Enter non-Us if outside of US, CA or AU"
            >
              {getFieldDecorator("address", {
                rules: [
                  {
                    required: true,
                    message: "Please input your state/province!",
                    whitespace: true,
                  },
                  {
                    max: 500,
                    message: "That is too long for a state/province",
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item
              label={<h3 style={{ display: "inline" }}>Country</h3>}
              colon={false}
            >
              {getFieldDecorator("country", {
                rules: [
                  {
                    required: true,
                    message: "Please input your state/province!",
                    whitespace: true,
                  },
                  {
                    max: 500,
                    message: "That is too long for a state/province",
                  },
                ],
              })(
                <AutoComplete
                  dataSource={countries}
                  style={{ width: 200 }}
                  filterOption={(inputValue, option) => {
                    return (
                      option.props.children
                        .toUpperCase()
                        .indexOf(inputValue.toUpperCase()) !== -1
                    )
                  }}
                  onSelect={this.setPrefixCode}
                />
              )}
            </Form.Item>
            <Form.Item label="Work Number">
              {getFieldDecorator("workNumber", {
                // transform: value => parseInt(value, 10),
                rules: [
                  { required: true, message: "Please input your work number!" },
                  {
                    // type: "str",
                    pattern: /^[0-9]*$/,
                    message: "Pleave provide a valid work number",
                  },
                  {
                    max: 12,
                    message: "That is way too long for a phone number",
                  },
                ],
              })(
                <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
              )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        )}
      </AppConsumer>
    )
  }
}

const WrappedRegistrationForm = Form.create({
  name: "register",
})(RegistrationForm)

export default WrappedRegistrationForm
