import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const CustomForm = ({ newUser, setNewUser, onSubmit }) => {
    const { register, handleSubmit, errors, watch } = useForm({
        mode: 'onChange',
    });

    const watchValue = watch();

    let confirmPasswordError = '';
    if (watchValue.password !== watchValue.confirmPassword) {
        confirmPasswordError = 'Password Does not match';
    }

    return (
        <Card className="login-email-password">
            <h2 className="text-center mb-4">
                {!newUser ? 'Login' : 'Create'} an Account
            </h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {newUser && (
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter your Name"
                            ref={register({
                                required: true,
                            })}
                        />
                        {errors.name && (
                            <Form.Text className="text-danger">
                                Name is required
                            </Form.Text>
                        )}
                    </Form.Group>
                )}
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        ref={register({
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+$/,
                                message: 'Please enter a valid email',
                            },
                        })}
                    />
                    {errors.email && (
                        <Form.Text className="text-danger">
                            {errors.email.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        ref={register({
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be least 6 charact',
                            },
                            maxLength: {
                                value: 20,
                                message: 'Passwords can be up to 20 characters',
                            },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{6,20}$/,
                                message:
                                    'Password must contain at least one digit, one upper and lower case letter.',
                            },
                        })}
                    />
                    {errors.password && (
                        <Form.Text className="text-danger">
                            {errors.password.message}
                        </Form.Text>
                    )}
                </Form.Group>
                {newUser && (
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="confirmPassword"
                            placeholder="Enter Confirm Password"
                            ref={register({
                                required: true,
                            })}
                        />
                        {confirmPasswordError && (
                            <Form.Text className="text-danger">
                                {confirmPasswordError}
                            </Form.Text>
                        )}
                    </Form.Group>
                )}
                <Button
                    variant="primary"
                    type="submit"
                    className="custrom-btn w-100"
                >
                    {newUser ? 'Sign In' : 'Login'}
                </Button>
            </Form>
            <p className="text-center m-0">
                {newUser
                    ? 'Already have an account?'
                    : "Don't have an account?"}
                <Button
                    variant="link"
                    onClick={() => setNewUser(!newUser)}
                    className="shadow-none"
                >
                    {newUser ? 'Login' : 'Create an account'}
                </Button>
            </p>
        </Card>
    );
};

export default CustomForm;
