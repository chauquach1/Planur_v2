"use server";

export async function submitAccomForm(accomFormData) {
  const rawFormData = Object.fromEntries(accomFormData.entries())
  console.log('rawFormData', rawFormData);
  // console.log('accomFormData', accomFormData);
  // console.log('prevState', prevState);
  // const accomName = accomFormData.get('accomName');
  // console.log('accomName', accomName);

  // for (const value of accomFormData.entries()) {
  //   console.log(value);
  // }
  // return accomName;
  const accomSchema = {
    accomName: rawFormData.accomName,
    accomType: rawFormData.accomType,
    accomAddress: {
      street: rawFormData.street,
      city: rawFormData.city,
      state: rawFormData.state,
      zip: rawFormData.zip,
      country: rawFormData.country,
    },
    accomPhone: rawFormData.accomPhoneNumber,
    accomEmail: rawFormData.accomEmail,
  };
  console.log('accomSchema', accomSchema);
}
