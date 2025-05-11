import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown'; // Existing import
import Icon from 'react-native-vector-icons/MaterialIcons'; // New import for icons

export default function RegistrationScreen({ navigation }) {
  const [country, setCountry] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for toggling confirm password visibility

  const countries = [
    { label: 'Afghanistan', value: 'Afghanistan' },
    { label: 'Aland Islands', value: 'Aland Islands' },
    { label: 'Albania', value: 'Albania' },
    { label: 'Algeria', value: 'Algeria' },
    { label: 'American Samoa', value: 'AmericanSamoa' },
    { label: 'Andorra', value: 'Andorra' },
    { label: 'Angola', value: 'Angola' },
    { label: 'Anguilla', value: 'Anguilla' },
    { label: 'Antarctica', value: 'Antarctica' },
    { label: 'Antigua and Barbuda', value: 'Antigua and Barbuda' },
    { label: 'Argentina', value: 'Argentina' },
    { label: 'Armenia', value: 'Armenia' },
    { label: 'Aruba', value: 'Aruba' },
    { label: 'Australia', value: 'Australia' },
    { label: 'Austria', value: 'Austria' },
    { label: 'Azerbaijan', value: 'Azerbaijan' },
    { label: 'Bahamas', value: 'Bahamas' },
    { label: 'Bahrain', value: 'Bahrain' },
    { label: 'Bangladesh', value: 'Bangladesh' },
    { label: 'Barbados', value: 'Barbados' },
    { label: 'Belarus', value: 'Belarus' },
    { label: 'Belgium', value: 'Belgium' },
    { label: 'Belize', value: 'Belize' },
    { label: 'Benin', value: 'Benin' },
    { label: 'Bermuda', value: 'Bermuda' },
    { label: 'Bhutan', value: 'Bhutan' },
    { label: 'Bolivia', value: 'Bolivia' },
    { label: 'Bosnia and Herzegovina', value: 'Bosnia and Herzegovina' },
    { label: 'Botswana', value: 'Botswana' },
    { label: 'Brazil', value: 'Brazil' },
    { label: 'British Indian Ocean Territory', value: 'British Indian Ocean Territory' },
    { label: 'Brunei Darussalam', value: 'Brunei Darussalam' },
    { label: 'Bulgaria', value: 'Bulgaria' },
    { label: 'Burkina Faso', value: 'Burkina Faso' },
    { label: 'Burundi', value: 'Burundi' },
    { label: 'Cambodia', value: 'Cambodia' },
    { label: 'Cameroon', value: 'Cameroon' },
    { label: 'Canada', value: 'Canada' },
    { label: 'Cape Verde', value: 'Cape Verde' },
    { label: 'Cayman Islands', value: 'Cayman Islands' },
    { label: 'Central African Republic', value: 'Central African Republic' },
    { label: 'Chad', value: 'Chad' },
    { label: 'Chile', value: 'Chile' },
    { label: 'China', value: 'China' },
    { label: 'Christmas Island', value: 'Christmas Island' },
    { label: 'Cocos (Keeling) Islands', value: 'Cocos (Keeling) Islands' },
    { label: 'Colombia', value: 'Colombia' },
    { label: 'Comoros', value: 'Comoros' },
    { label: 'Congo', value: 'Congo' },
    { label: 'Cook Islands', value: 'Cook Islands' },
    { label: 'Costa Rica', value: 'Costa Rica' },
    { label: 'Croatia', value: 'Croatia' },
    { label: 'Cuba', value: 'Cuba' },
    { label: 'Cyprus', value: 'Cyprus' },
    { label: 'Czech Republic', value: 'Czech Republic' },
    { label: 'Denmark', value: 'Denmark' },
    { label: 'Djibouti', value: 'Djibouti' },
    { label: 'Dominica', value: 'Dominica' },
    { label: 'Dominican Republic', value: 'Dominican Republic' },
    { label: 'Ecuador', value: 'Ecuador' },
    { label: 'Egypt', value: 'Egypt' },
    { label: 'El Salvador', value: 'El Salvador' },
    { label: 'Equatorial Guinea', value: 'Equatorial Guinea' },
    { label: 'Eritrea', value: 'Eritrea' },
    { label: 'Estonia', value: 'Estonia' },
    { label: 'Ethiopia', value: 'Ethiopia' },
    { label: 'Fiji', value: 'Fiji' },
    { label: 'Finland', value: 'Finland' },
    { label: 'France', value: 'France' },
    { label: 'Gabon', value: 'Gabon' },
    { label: 'Gambia', value: 'Gambia' },
    { label: 'Georgia', value: 'Georgia' },
    { label: 'Germany', value: 'Germany' },
    { label: 'Ghana', value: 'Ghana' },
    { label: 'Greece', value: 'Greece' },
    { label: 'Greenland', value: 'Greenland' },
    { label: 'Grenada', value: 'Grenada' },
    { label: 'Guadeloupe', value: 'Guadeloupe' },
    { label: 'Guam', value: 'Guam' },
    { label: 'Guatemala', value: 'Guatemala' },
    { label: 'Guinea', value: 'Guinea' },
    { label: 'Guinea-Bissau', value: 'Guinea-Bissau' },
    { label: 'Guyana', value: 'Guyana' },
    { label: 'Haiti', value: 'Haiti' },
    { label: 'Honduras', value: 'Honduras' },
    { label: 'Hong Kong', value: 'Hong Kong' },
    { label: 'Hungary', value: 'Hungary' },
    { label: 'Iceland', value: 'Iceland' },
    { label: 'India', value: 'India' },
    { label: 'Indonesia', value: 'Indonesia' },
    { label: 'Iran', value: 'Iran' },
    { label: 'Iraq', value: 'Iraq' },
    { label: 'Ireland', value: 'Ireland' },
    { label: 'Israel', value: 'Israel' },
    { label: 'Italy', value: 'Italy' },
    { label: 'Jamaica', value: 'Jamaica' },
    { label: 'Japan', value: 'Japan' },
    { label: 'Jordan', value: 'Jordan' },
    { label: 'Kazakhstan', value: 'Kazakhstan' },
    { label: 'Kenya', value: 'Kenya' },
    { label: 'Kiribati', value: 'Kiribati' },
    { label: 'Kuwait', value: 'Kuwait' },
    { label: 'Kyrgyzstan', value: 'Kyrgyzstan' },
    { label: 'Laos', value: 'Laos' },
    { label: 'Latvia', value: 'Latvia' },
    { label: 'Lebanon', value: 'Lebanon' },
    { label: 'Lesotho', value: 'Lesotho' },
    { label: 'Liberia', value: 'Liberia' },
    { label: 'Libya', value: 'Libya' },
    { label: 'Liechtenstein', value: 'Liechtenstein' },
    { label: 'Lithuania', value: 'Lithuania' },
    { label: 'Luxembourg', value: 'Luxembourg' },
    { label: 'Madagascar', value: 'Madagascar' },
    { label: 'Malawi', value: 'Malawi' },
    { label: 'Malaysia', value: 'Malaysia' },
    { label: 'Maldives', value: 'Maldives' },
    { label: 'Mali', value: 'Mali' },
    { label: 'Malta', value: 'Malta' },
    { label: 'Marshall Islands', value: 'Marshall Islands' },
    { label: 'Martinique', value: 'Martinique' },
    { label: 'Mauritania', value: 'Mauritania' },
    { label: 'Mauritius', value: 'Mauritius' },
    { label: 'Mexico', value: 'Mexico' },
    { label: 'Micronesia', value: 'Micronesia' },
    { label: 'Moldova', value: 'Moldova' },
    { label: 'Monaco', value: 'Monaco' },
    { label: 'Mongolia', value: 'Mongolia' },
    { label: 'Montenegro', value: 'Montenegro' },
    { label: 'Morocco', value: 'Morocco' },
    { label: 'Mozambique', value: 'Mozambique' },
    { label: 'Myanmar', value: 'Myanmar' },
    { label: 'Namibia', value: 'Namibia' },
    { label: 'Nauru', value: 'Nauru' },
    { label: 'Nepal', value: 'Nepal' },
    { label: 'Netherlands', value: 'Netherlands' },
    { label: 'New Zealand', value: 'New Zealand' },
    { label: 'Nicaragua', value: 'Nicaragua' },
    { label: 'Niger', value: 'Niger' },
    { label: 'Nigeria', value: 'Nigeria' },
    { label: 'Norway', value: 'Norway' },
    { label: 'Oman', value: 'Oman' },
    { label: 'Pakistan', value: 'Pakistan' },
    { label: 'Palau', value: 'Palau' },
    { label: 'Panama', value: 'Panama' },
    { label: 'Papua New Guinea', value: 'Papua New Guinea' },
    { label: 'Paraguay', value: 'Paraguay' },
    { label: 'Peru', value: 'Peru' },
    { label: 'Philippines', value: 'Philippines' },
    { label: 'Poland', value: 'Poland' },
    { label: 'Portugal', value: 'Portugal' },
    { label: 'Qatar', value: 'Qatar' },
    { label: 'Romania', value: 'Romania' },
    { label: 'Russia', value: 'Russia' },
    { label: 'Rwanda', value: 'Rwanda' },
    { label: 'Samoa', value: 'Samoa' },
    { label: 'San Marino', value: 'San Marino' },
    { label: 'Saudi Arabia', value: 'Saudi Arabia' },
    { label: 'Senegal', value: 'Senegal' },
    { label: 'Serbia', value: 'Serbia' },
    { label: 'Seychelles', value: 'Seychelles' },
    { label: 'Singapore', value: 'Singapore' },
    { label: 'Slovakia', value: 'Slovakia' },
    { label: 'Slovenia', value: 'Slovenia' },
    { label: 'Solomon Islands', value: 'Solomon Islands' },
    { label: 'Somalia', value: 'Somalia' },
    { label: 'South Africa', value: 'South Africa' },
    { label: 'South Korea', value: 'South Korea' },
    { label: 'Spain', value: 'Spain' },
    { label: 'Sri Lanka', value: 'Sri Lanka' },
    { label: 'Sudan', value: 'Sudan' },
    { label: 'Suriname', value: 'Suriname' },
    { label: 'Swaziland', value: 'Swaziland' },
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Switzerland', value: 'Switzerland' },
    { label: 'Syria', value: 'Syria' },
    { label: 'Taiwan', value: 'Taiwan' },
    { label: 'Tajikistan', value: 'Tajikistan' },
    { label: 'Tanzania', value: 'Tanzania' },
    { label: 'Thailand', value: 'Thailand' },
    { label: 'Togo', value: 'Togo' },
    { label: 'Tonga', value: 'Tonga' },
    { label: 'Trinidad and Tobago', value: 'Trinidad and Tobago' },
    { label: 'Tunisia', value: 'Tunisia' },
    { label: 'Turkey', value: 'Turkey' },
    { label: 'Turkmenistan', value: 'Turkmenistan' },
    { label: 'Tuvalu', value: 'Tuvalu' },
    { label: 'Uganda', value: 'Uganda' },
    { label: 'Ukraine', value: 'Ukraine' },
    { label: 'United Arab Emirates', value: 'United Arab Emirates' },
    { label: 'United Kingdom', value: 'United Kingdom' },
    { label: 'United States', value: 'United States' },
    { label: 'Uruguay', value: 'Uruguay' },
    { label: 'Uzbekistan', value: 'Uzbekistan' },
    { label: 'Vanuatu', value: 'Vanuatu' },
    { label: 'Vatican City', value: 'Vatican City' },
    { label: 'Venezuela', value: 'Venezuela' },
    { label: 'Vietnam', value: 'Vietnam' },
    { label: 'Yemen', value: 'Yemen' },
    { label: 'Zambia', value: 'Zambia' },
    { label: 'Zimbabwe', value: 'Zimbabwe' },
  ];

  const handleRegister = () => {
    if (!country || country === 'Select Country') {
      alert('Please select a country.');
      return;
    }
    if (!name) {
      alert('Please enter your name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    const contactRegex = /^[0-9]{10,15}$/; // Ensures contact is numeric and between 10-15 digits
    if (!contactRegex.test(contact)) {
      alert('Please enter a valid phone number (10-15 digits).');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    // Implement registration logic here
    console.log('Country:', country);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', contact);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Redirect to Dashboard after successful registration
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Here!!!</Text>
      <View style={styles.formContainer}>
        <Dropdown
          style={styles.select}
          data={countries}
          labelField="label"
          valueField="value"
          placeholder="Select Country"
          placeholderStyle={styles.placeholder} // Added placeholder style
          search
          value={country}
          onChange={(item) => setCountry(item.value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address" // Added to specify email keyboard
          autoCapitalize="none" // Prevent auto-capitalization
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={contact}
          onChangeText={setContact}
          keyboardType="phone-pad" // Added to specify phone number keyboard
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? 'visibility' : 'visibility-off'}
              size={20}
              color="#ccc"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Icon
              name={showConfirmPassword ? 'visibility' : 'visibility-off'}
              size={20}
              color="#ccc"
            />
          </TouchableOpacity>
        </View>
        <Button title="Register" onPress={handleRegister} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Already have an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  formContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    justifyContent: 'center', // Added to center Picker text vertically
  },
  select: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  placeholder: {
    color: '#ccc', // Added placeholder color
    fontSize: 16, },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
  },
  link: {
    color: '#1e90ff',
    marginTop: 20,
    textAlign: 'center',
  },
});
