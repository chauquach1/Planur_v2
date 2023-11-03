import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import AuthForm from "../../auth-form";

const SignInModal = ({ open, onClose }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="top-0 z-10"
        initialFocus={cancelButtonRef}
        onClose={onClose} // Call the onClose callback when the modal is closed
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className=" bg-white px-4 pb-4 pt-5">
                  <div className="columns-1 flex-col justify-center items-center">
                    <div className="mt-3 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base text-center font-semibold leading-6 text-gray-900"
                      >
                        Log in with a Magic Link
                      </Dialog.Title>
                      <div className="mt-2">
                        <AuthForm />
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SignInModal;
