'use client';

import ProfileHeader from "./components/ProfileHeader";
import ProfileForm from "./components/ProfileInput";
import SaveButton from "./components/SaveButton";

export default function ProfilePage() {
  return (
    <div className="w-full px-4 pt-6 pb-24 bg-white">
      <ProfileHeader />
      <ProfileForm />
      <SaveButton />
    </div>
  );
}
