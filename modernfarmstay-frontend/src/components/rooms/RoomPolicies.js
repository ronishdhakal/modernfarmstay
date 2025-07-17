export default function RoomPolicies({ policies }) {
  if (!policies || policies.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">Room Policies</h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <ul className="space-y-2">
          {policies.map((policy, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-[#54b435] mt-1">•</span>
              <span>{policy.policy}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
