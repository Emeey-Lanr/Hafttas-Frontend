"use client";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import localFont from "next/font/local";
import { useState } from "react";
import SignInNavbar from "@/components/SignInNavbar";
import SignInFooter from "@/components/SignInFooter";

// const myFont = localFont({ src: '../../public/fonts/Detacher/Detacher Regular.ttf' })

interface MyFormValues {
    username: string;
    email: string;
    password: string;
}

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, "username is too Short!")
        .max(50, "username is too Long!")
        .required("required"),
    email: Yup.string().email("Invalid email").required("required"),
    password: Yup.string()
        .min(6, "password is too Short!")
        .max(50, "password too Long!")
        .required("required"),
});

const page = () => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const submit = () => {
        console.log("submit");
        setButtonClicked(true);
    };

    const initialValues: MyFormValues = {
        username: "",
        email: "",
        password: "",
    };

    return (
        <section className="min-h-screen flex flex-col justify-between">
            <SignInNavbar />
            <div className="px-2 md:max-w-[50%] lg:max-w-[30%] mx-auto">
                <div>
                    <h1 className="text-white text-5xl font-[Detacher]">
                        SIGN UP_
                    </h1>
                    <p className="font-spaceMono text-[#A4A4A4] text-base py-3">
                        start a journey by creating an account and providing the
                        details needed below.
                    </p>
                </div>
                <div className="border-t border-b-[5px] border-r-[5px] border-l px-8 pt-8 pb-4">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={SignupSchema}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ handleSubmit, errors, touched }) => (
                            <Form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-3"
                            >
                                <Field
                                    className="bg-black  border py-3 text-xs pl-2 focus:outline-none text-white"
                                    name="username"
                                    placeholder="Username"
                                />
                                {errors.username && touched.username ? (
                                    <span className="text-red-600">
                                        {errors.username}
                                    </span>
                                ) : null}
                                <Field
                                    className="bg-black border py-3 text-xs pl-2 focus:outline-none text-white"
                                    name="email"
                                    placeholder="Email"
                                />
                                {errors.email && touched.email ? (
                                    <span className="text-red-600">
                                        {errors.email}
                                    </span>
                                ) : null}
                                <Field
                                    className="bg-black  border py-3 text-xs pl-2 focus:outline-none text-white"
                                    name="password"
                                    type="Password"
                                    placeholder="Password"
                                />
                                {errors.password && touched.password ? (
                                    <span className="text-red-600">
                                        {errors.password}
                                    </span>
                                ) : null}
                                <button
                                    onClick={submit}
                                    disabled={buttonClicked}
                                    className="text-white font-spaceMono border-b-4 border-l-2 border-r-2 border-t py-2"
                                    type="submit"
                                >
                                    Create
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <p className="text-[#A4A4A4] font-spaceMono text-xs pt-4">
                        Already got an account?{" "}
                        <Link href="/signin">Signin</Link>
                    </p>
                </div>
            </div>
            <SignInFooter />
        </section>
    );
};

export default page;
